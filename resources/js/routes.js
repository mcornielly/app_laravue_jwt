import Home from './admin/Home.vue';
import Login from './components/auth/Login.vue';
import CustomersMain from './customers/Index.vue';
import CustomersList from './customers/List.vue';
import NewCustomer from './customers/New.vue';
import Customer from './customers/View.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: CustomersList
            },
            {
                path: 'new',
                component: NewCustomer
            },
            {
                path: ':id',
                component: Customer
            }
        ]
    }
];