var router = require('koa-router')();

router.get('/', async function (ctx, next) {
	ctx.state = {
		title: 'koa2 title123'
	};

	await ctx.render('index', {
		sb: 'you are sb111234'
	});
})
router.get('/hello', async function (ctx, next) {
	ctx.state = {
		title: 'koa2 title123'
	};
	console.log(ctx)
	await ctx.render('index', {
		sb: 'you are sb111234'
	});
})
module.exports = router;