const express=require('express')
const router=express.Router()

let list1=[{name:'Rice',price:'40'},{name:'Wheat',price:'50'}]

router.get('/1',(req,res)=>{
    res.render('list',{productList:list1})
})
let list2=[{src:"https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UF1000,1000_QL80_.jpg",name:"Iphone"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGffmyxVGrSdodN2pXWzpCeXr-_F1-2lTyBU1EWDZEQ&s",name:"Galaxy"}]
router.get('/2',(req,res)=>{
    res.render('list2',{items:list2})
})

let list3=["Abi","Arshak","Haris"]
router.get('/3',(req,res)=>{
    res.render('list3',{list3:list3})
})

module.exports=router

