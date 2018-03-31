function User(name, age) {

  this.ten = name;
  this.tuoi = age;
  this.getName = function(){
      return this.ten;
  },
    this.getAge = function(){
        return this.tuoi
    }

}



var user = new User("Bob", 44);

// Kiểm tra hai phương thức của đối tượng

console.log(user.getName());

console.log(user.getAge());
