//first step declare variables

const students = [
    {name: "Pinhead Larry", score: 70},
    {name: "Bubble Buddy", score: 22},
    {name: "Donald Trump", score: 1}
]

//second step create a class

class FinalExam{
    constructor(students){
    this.students = students
    this.extraCredit =this.giveExtraCredit(this.students)
    this.passers = this.getPassers(this.extraCredit)
    this.average = this.getAverage(this.extraCredit)
    }
    giveExtraCredit(students){
        return students.map((student)=>{
            return student.score + 15
        })

    }

    //in the filter function when you are trying to pass it into the array, use 1 if you are trying to skip it use 0.


    getPassers(scores){
        return scores.filter((score)=>{
         return (score > 59) ? 1 : 0
        })
    }

    getAverage(scores){
        return scores.reduce((acc, cur, index)=>{
            return (index === scores.length - 1) ? ((acc + cur)/(index + 1)) : (acc + cur)
        })
    }
    
}


var test = new FinalExam(students)
//console.log(test.extraCredit)
//console.log(test.passers)
console.log(test.average)

