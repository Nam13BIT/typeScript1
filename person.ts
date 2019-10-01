class Person {
    Name: string;
    Age: number;
    constructor (Name : string, Age : number){
        this.Name = Name;
        this.Age = Age;
    }
    Hello() {
        let say: String = 'Hello';
        console.log(say);
    }
    SetAge() {
        console.log(this.Age);
    }
}
//var Nguoi1 = new Person('Nam', 24);
//Nguoi1.Hello();
class Student extends Person {
    Job: string;
    constructor(Name : string, Age : number, Job : string){
        super(Name, Age);
        this.Job = Job;
    }
    GoToClasses() {
        let say: String = 'I’m going to class.';
        console.log(say);
    }
    ShowAge() {
       n: Number;
        let n:number = this.Age;
        var say: (x: number) => string = function(x) { 
            return `My age is: ${x} years old`;
        } 
       console.log(say(n));
    }
}
//var Nguoi2 = new Student('Nam', 24, 'student');
//Nguoi2.GoToClasses();
//Nguoi2.ShowAge();
//Nguoi2.Hello();
class Teacher extends Student {
    Job: string;
    private Subject: string; 
    constructor(Name : string, Age : number, Job : string, Subject: string){
        super(Name, Age, Job);
        this.Subject = Subject;
    }
    Explain() {
        let say: String = 'Explanation begins';
        console.log(say);
    }
}
//var Nguoi3 = new Teacher('Nam', 24, 'student', 'math');
//Nguoi3.Explain();
//Nguoi3.Hello();
class StudentAndTeacherTest extends Teacher{
    constructor(Name : string, Age : number, Job : string, Subject: string){
        super(Name, Age, Job, Subject);
    }
    Test(){
        if(this.Job == "student" ){
            console.log(this.GoToClasses());
            console.log(this.ShowAge());
        }
        else{
            console.log(this.Explain());
        }
    }
}
var Nguoi5= new StudentAndTeacherTest('Nam', 24, 'student', 'math');
Nguoi5.Test();
Nguoi5.Hello();