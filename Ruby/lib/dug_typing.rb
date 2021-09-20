# rubocop:disable all

# ダックを見つけられていないコード
class Trip
  attr_reader :bicycles, :customers, :vehicle

  def prepare(preparers)
    preparers.each do |preparer|
      case preparer
      when Mechanic
        prepare.prepare_bicycles(bicycles)
      when TripCoordinator
        preparer.buy_food(customers)
      when Driver
        preparer.gas_up(vehicle)
        preparer.fill_water_tank(vehicle)
      end
    end
  end
end

# ダックを見つける
# prepare_tripに応答するオブジェクトであれば良い
class Trip
  attr_reader :bicycles, :customers, :vehicle

  def prepare(preparers)
    preparers.each { |preparer| preparer.prepare_trip(self) }
  end
end

# prepare_tripに応答するダックにする
class Mechanic
  def prepare_trip(trip)
    trip.bicycles.each { |bicycle| prepare_bicycle(bicycle) }
  end
end

class TripCoordinator
  def prepare_trip(trip)
    buy_food(trip.customers)
  end
end

class Driver
  def prepare_trip(trip)
    vehicle = trip.vehicle
    gas_up(vehicle)
    fill_water_tank(vehicle)
  end
end


# class PersonalItem
#   attr_accessor :kind

#   def initialize(kind)
#     @kind = kind
#   end

#   def set_recipe()

#   end
# end

# personal_item = PersonalItem.new(item.personal_kind)
# personal_item.set_recipe()

# rubocop:disable all