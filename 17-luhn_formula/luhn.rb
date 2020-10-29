require 'pry'

def luhn? (num)
  arr = num.to_s.split('')
  rev_arr =arr.reverse()
  luhn_arr =[]
  rev_arr.each_with_index do |num, index|
    int = num.to_i
    if index.odd?
      int = int * 2
    end
    if int >= 10
      int -= 9
    end
    luhn_arr << int
  end
  sum = luhn_arr.sum
  if sum % 10 == 0
    puts "#{num} is valid per the luhn formula"
    true
  else
    puts "#{num} is not valid per the luhn formula"
     false
  end
end

luhn? 3554

luhn? 8763
