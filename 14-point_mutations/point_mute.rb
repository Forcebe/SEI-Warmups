def hamming (str_1, str_2)
  arr_1 = str_1.split('')
  arr_2 = str_2.split('')
  hamming_number = 0
  i = 0
  arr_1.each do |char, index|
    if char != arr_2[index]
      hamming_number += 1
    end
    i += 1
  end
  puts "The Hamming Number is #{hamming_number}"
end

hamming('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')
