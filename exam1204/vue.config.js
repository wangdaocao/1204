module.exports={
    lintOnSave:false,
    devServer:{
        before:(app)=>{
            app.get('/getList',res=>{
                let data=require('./src/mock/data.json')
                res.send(data)
            })
        }
    }
}