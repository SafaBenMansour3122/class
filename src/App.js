import React from 'react';
// import './App.css';




class Human {
  name ;
  job ;
  skills ;
    constructor(){
      this.name="safa"
      this.job="developer"
      this.skills=['java','react']
    }
}
class Student extends Human{
    constructor(){
       super();
    }
  getJob(newjob){
    this.job=newjob
    console.log(this.job)
  }

  learnNewSkill(skill){
    this.skills.push(skill)
    console.log(this.skills)
  }

  forgetSkill(skill){
    this.skills=this.skills.filter((S)=>{return S!=skill})
    console.log(this.skills)
  }

  leaveJob(){
    this.job="unmployed"
    console.log(this.job)
  }

}
const me = new Student();

me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();


export default  Student  ;
