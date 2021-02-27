const person ={
    name:"rahul",
    skills:['js','py','java'],
    details : function(){
        this.skills.forEach((skill)=>{
            console.log(`${this.name} knows ${skill}`)
        })
    },
    //inside a method , if there is  a function ,inside that function ,value
    // of this is global object not the current object
    profile:function(){
        const someFunction =()=>{
            console.log(this.name)
        }
        someFunction()
        return this
    }
}
person.details()
console.log(person.profile())