// const person = {
//     name:"rahul",
//     greet: function(){
//         return 'hello my name is '+ this.name //hello my name is rahul
//     }
// }
// console.log(person.greet()) //hello my name is undefined

// const sayName = person.greet
// console.log(sayName())

// //bind method help to set the context of this keyword inside a function 
// //what gets passed to the bind method will not become the value of this keyword
// console.log(sayName.bind(person)()) //hello my name is rahul

// function sayHello(){
//     return 'hello my name is ' +this.name
// }
// console.log(sayHello.bind({name:"dravid"})()) //hello my name is dravid

const person ={
    name:"rahul",
    skills:['js','py','java'],
    detailsWithOutBind : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        })
    },
    detailsWithBind: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    },
    //inside a method , if there is  a function ,inside that function ,value
    // of this is global object not the current object
    profile:function(){
        function someFunction(){
            console.log(this.name)
        }
        someFunction()
        return this
    }
}
person.detailsWithOutBind()
person.detailsWithBind()
console.log(person.profile())