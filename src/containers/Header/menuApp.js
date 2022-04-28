export const adminMenu = [
    { //Quan ly ban hang

        name: 'menu.admin.manager-sale', menus: [
            {
                name: 'menu.admin.check-inventory', link: '/system/check-inventories',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {

                name: 'menu.admin.manager-recipet', link: '/system/manage-recipte'
            },
            {

                name: 'menu.admin.ship', link: '/system/ship'
            }
        ]
    },
    { //Quan ly nguoi dung

        name: 'menu.admin.manager-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manager'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manager-admin', link: '/system/user-admin'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manager-seller', link: '/system/user-seller'
            },
            {
                name: 'menu.admin.manager-customer', link: '/system/user-customer'
            }

        ]
    },
    { //Quan ly sản phẩm

        name: 'menu.admin.product', menus: [
            {
                name: 'menu.admin.manager-product', link: '/system/product-manager'
            },
            {
                name: 'menu.admin.manager-detail-product', link: '/system/product-detaile-manager'
            },
        ]
    },
    { //Quan ly tin tức

        name: 'menu.admin.news', menus: [
            {
                name: 'menu.admin.manager-news', link: '/system/news-manager'
            },
        ]
    },
];

export const sellerMenu = [
    { //Quan ly ban hang

        name: 'menu.admin.manager-sale', menus: [
            {
                name: 'menu.admin.check-inventory', link: 'system/check-inventories',
            },
            {

                name: 'menu.admin.ship', link: 'system/ship'
            }
        ]
    },
    { //Quan ly nguoi dung

        name: 'menu.admin.manager-user', menus: [
            {
                name: 'menu.admin.manager-customer', link: '/system/user-customer'
            }

        ]
    },
    { //Quan ly sản phẩm

        name: 'menu.admin.product', menus: [
            {
                name: 'menu.admin.manager-product', link: '/system/product-manager'
            },
            {
                name: 'menu.admin.manager-detail-product', link: '/system/product-detaile-manager'
            },
        ]
    },
    { //Quan ly tin tức
        name: 'menu.admin.news', menus: [
            {
                name: 'menu.admin.manager-news', link: '/system/news-manager'
            },
        ]
    },
];