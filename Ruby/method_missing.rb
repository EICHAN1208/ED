# rubocop:disable all


class Task
  attr_reader :name, :due_date

  def initialize(name, due_date)
    @name = name
    @due_date = due_date
  end

  class << self
    def create(name, due_date)
      task = new(name, due_date)
      task.save
      task
    end
  end

  def save
    puts "「#{name}」タスクを保存しました。"
  end

  private

  def method_missing(method_name)
    puts "#{method_name}だよ。"
  end

  def respond_to_missing?
    true
  end
end

Task.create('牛乳を飲む', '2021-09-03')

task = Task.new('テニスをする', '2021-09-20')

# Taskインスタンスに対して未定義のメソッドを呼ぶとmethod_missingがオーバーライドされる
task.non_exist_method
# => "non_exist_methodだよ。"

# rubocop:disable all
