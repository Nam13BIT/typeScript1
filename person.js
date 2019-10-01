var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    Person.prototype.Hello = function () {
        var say = 'Hello';
        console.log(say);
    };
    Person.prototype.SetAge = function () {
        console.log(this.Age);
    };
    return Person;
}());
//var Nguoi1 = new Person('Nam', 24);
//Nguoi1.Hello();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(Name, Age, Job) {
        var _this = _super.call(this, Name, Age) || this;
        _this.Job = Job;
        return _this;
    }
    Student.prototype.GoToClasses = function () {
        var say = 'I’m going to class.';
        console.log(say);
    };
    Student.prototype.ShowAge = function () {
        n: Number;
        var n = this.Age;
        var say = function (x) {
            return "My age is: " + x + " years old";
        };
        console.log(say(n));
    };
    return Student;
}(Person));
//var Nguoi2 = new Student('Nam', 24, 'student');
//Nguoi2.GoToClasses();
//Nguoi2.ShowAge();
//Nguoi2.Hello();
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(Name, Age, Job, Subject) {
        var _this = _super.call(this, Name, Age, Job) || this;
        _this.Subject = Subject;
        return _this;
    }
    Teacher.prototype.Explain = function () {
        var say = 'Explanation begins';
        console.log(say);
    };
    return Teacher;
}(Student));
//var Nguoi3 = new Teacher('Nam', 24, 'student', 'math');
//Nguoi3.Explain();
//Nguoi3.Hello();
var StudentAndTeacherTest = /** @class */ (function (_super) {
    __extends(StudentAndTeacherTest, _super);
    function StudentAndTeacherTest(Name, Age, Job, Subject) {
        return _super.call(this, Name, Age, Job, Subject) || this;
    }
    StudentAndTeacherTest.prototype.Test = function () {
        if (this.Job == "student") {
            console.log(this.GoToClasses());
            console.log(this.ShowAge());
        }
        else {
            console.log(this.Explain());
        }
    };
    return StudentAndTeacherTest;
}(Teacher));
var Nguoi5 = new StudentAndTeacherTest('Nam', 24, 'student', 'math');
Nguoi5.Test();
Nguoi5.Hello();