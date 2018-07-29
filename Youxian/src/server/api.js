import Router from 'koa-router';
import nodeFetch from 'node-fetch';
import urltool from "url"
const router = Router();

export default router;

router.get('/getMenuList', (ctx) => {
    ctx.body = JSON.stringify([{
        title: '首页',
        pathname: '/home',
        icon: 'home',
    }, {
        title: '视觉单元',
        pathname: '/visualUnit',
        icon: 'dot-chart',
        children: [{
            title: '视觉单元列表',
            pathname: '/visualUnit/list',
            icon: 'bars',
        }, {
            title: '新增视觉单元',
            pathname: '/visualUnit/add',
            icon: 'plus',
        }],
    }, {
        title: '模版库',
        pathname: '/dashboard',
        icon: 'folder',
        children: [{
            title: '模版列表',
            pathname: '/dashboard/list',
            icon: 'bars',
        }, {
            title: '新增模版',
            pathname: '/dashboard/add',
            icon: 'plus',
        }],
    }, {
        title: '个性化',
        pathname: '/custom',
        icon: 'customer-service',
    }]);
});
//后台向数据库抓取数据
router.get("/getProducts",async (ctx) => {
    var path=urltool.parse(ctx.request.url,true)
    var url=path.query.type
    
    const data=await nodeFetch( `https://as-vip.missfresh.cn/v3/product/category/${url} `,{
        methods:"GET",
        headers:{
            "x-region": JSON.stringify({"address_code":110108}),
        },
    }).then(res=>res.json()).then(json=>json)
    ctx.body=data||[1,2,3]; 
})

