/*
 * @Author: your name
 * @Date: 2021-11-18 11:13:17
 * @LastEditTime: 2021-11-27 22:04:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\stores\user.ts
 */
// @ts-check
import { defineStore, acceptHMRUpdate } from "pinia";

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a: string, p: string) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials"));
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "Eduardo",
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        name: "",
        isAdmin: false,
      });

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: any, password: any) {
      const userData = await apiLogin(user, password);

      this.$patch({
        name: user,
        ...userData,
      });
    },
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
// }
