export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
      }
      // console.log("Token from authconfig: ", token);
      return token;
    },
    async session(session, token) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
      }
      // console.log("Session from authconfig: ", session);
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      //   const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      // TODO
      const isOnReviewsPage = request.nextUrl?.pathname.startsWith("/reviews");
      const isOnDashboard = request.nextUrl?.pathname.startsWith("/dashboard");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      //   if (isOnAdminPanel && !user?.isAdmin) {
      //     return false;
      //   }
      // TODO
      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnReviewsPage && !user) {
        return false;
      }

      // ONLY AUTHENTICATED USER CAN REACH THE DASHBOARD PAGE
      if (isOnDashboard && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
        // return false;
      }

      return true;
    },
  },
};
