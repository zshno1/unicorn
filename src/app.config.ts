export default defineAppConfig({
    pages: ['pages/index/index'],
    subPackages: [
        {
            name: 'toolbox',
            root: 'packages/toolbox',
            independent: false,
            pages: ['pages/annualInterest/annualInterest', 'pages/grid/grid'],
        },
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
});
