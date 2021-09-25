class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end

person = Person.new('Mura', 28)
copy_person = person
copy_person.name = 'murakami'
p person #<Person:0x00007f865289f640 @name="murakami", @age=28>

class Racket
  attr_accessor :name, :weight

  def initialize(name, weight)
    @name = name
    @weight = weight
  end
end

racket = Racket.new('pure drive', 300)
copy_racket = racket.dup
copy_racket.name = 'pure aero'
p racket #<Racket:0x00007fcfdf8d30e0 @name="pure drive", @weight=300>
