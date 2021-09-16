class Weight
  attr_accessor :unit, :value

  OPERATORS = %w[+ -].freeze

  def initialize(unit, value)
    @unit = unit
    @value = value
  end

  OPERATORS.each do |operator|
    eval <<-MEHTOD
      def #{operator}(weight)
        calculate(weight) do |a, b|
          a #{operator} b
        end
      end
    MEHTOD
  end

  def calculate(weight)
    new_value = yield(weight.value, value)
    Weight.new('g', new_value)
  end

  def to_mg
    value * 1000
  end
end

weight = Weight.new('g', 10)
new_weight = Weight.new('g', 30)
new_new_weight = weight.send('-', new_weight)
p new_new_weight.send('to_mg')
# => 20000