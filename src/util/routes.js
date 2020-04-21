import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/dashboard/Dashboard";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        { path: "/", name: 'Dashboard', component: Dashboard},
        // { path: "/users", name: 'Users', component: Users},
        // { path: "/users/:id", name: 'User', component: UserPage},
        // { path: "/users/create", name: "UserCreate", component: UserPage},
        // { path: "/users/:id/email", name: 'EmailUpdate', component: Email},
        // { path: "/users/:id/password", name: 'PasswordUpdate', component: Password},
        // { path: "/password/restore", name: "PasswordRestore", component: RestorePassword},
        // { path: "/users/:id/phone", name: 'PhoneUpdate', component: Phone},
        // { path: "/login", name: "Login", component: LoginPage},
        // { path: "/logout", name: 'Logout', component: LogoutPage}
    ]
});
//
// router.beforeEach((to, from, next) => {
//     const isPublicPage = ['Login', 'Dashboard'].includes(to.name);
//     const authenticated = store.getters.principal.id;
//     if (!isPublicPage && !authenticated) {
//         try {
//             let response = UserService.refresh();
//             if (response.status !== 200) {
//                 store.dispatch('logout').then()
//                 store.dispatch('updateMessages', 'Please, log in.').then()
//                 next({
//                     path: '/login'
//                 })
//             } else {
//                 next()
//             }
//         } catch (exception) {
//             store.dispatch('updateMessages', 'Please, log in.').then()
//             next({
//                 path: '/login'
//             })
//         }
//     } else {
//         next();
//     }
// });

export default router;