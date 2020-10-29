# Menu system
puts "This program explores two sequences:"
puts "   [1]* s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc = "
puts "   [2]* s2 = s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc"
puts "Which sequence would you like to explore?"
sequence = gets.to_i


def sums_1(n)
  i = 1
  s1 = 1
  string = "1 "
  while i < n do
    if i.odd?
      s1 -= 1
      string += "- 1 "
    else
      s1 += 1
      string += "+ 1 "
    end
    i += 1
  end
  puts "s1 = #{string}"
  puts "s1 resolves to #{s1}"
end

def sums_2(n)
  i = 1
  s2 = 1
  string = "1 "
  while i < n do
    s2 += (i + 1)
    string += "+ #{i + 1} "
    i += 1
  end
  puts "s2 = #{string}"
  puts "s2 resolves to #{s2}"
end

if sequence == 1
  puts "How many repetitions would you like to run for?"
  n = gets.to_f
  sums_1(n)
elsif sequence == 2
  puts "How many repetitions would you like to run for?"
  n = gets.to_f
  sums_2(n)
else
  puts "Invalid selection"
end
