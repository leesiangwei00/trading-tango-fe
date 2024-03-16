import axios from "axios";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    mobile: "",
    verifyEmail: false,
  }),
  actions: {
    async login(req) {
      try {
        const res = await axios
          .post("http://localhost:4000/login", req)
          .catch((error) => error);
        if (res.status === 200) {
          const data = await res.data;
          this.$patch(data);
          return { success: true };
        } else if (res.response.status === 404) {
          return {
            success: false,
            error: "InvalidEmailOrPassword",
          };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          error: "CommonError",
        };
      }
    },
    async register(req) {
      try {
        const res = await axios
          .post("http://localhost:4000/register", req)
          .catch((error) => error);
        if (res?.status === 201) {
          const data = await res.data;
          this.$patch(data);
          return {
            success: true,
          };
        } else if (res.response.status === 400) {
          return {
            success: false,
            error: "AccountExisted",
          };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          error: "CommonError",
        };
      }
    },
    async verify() {
      try {
        const res = await axios
          .post("http://localhost:4000/verifyEmail", {
            email: this.email,
          })
          .catch((error) => error);
        if (res?.status === 200) {
          this.$patch({ verifyEmail: false });
          return { success: true };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          error: "CommonError",
        };
      }
    },
    logout() {
      this.$reset();
    },
  },
});
