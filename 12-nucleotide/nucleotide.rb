def count_nucleotides(string)
  #count nucleotide appearences
  nuc_a = string.count("A")
  nuc_c = string.count("C")
  nuc_g = string.count("G")
  nuc_t = string.count("T")

  #puts output
  puts "A: #{nuc_a}"
  puts "C: #{nuc_c}"
  puts "G: #{nuc_g}"
  puts "T: #{nuc_t}"

  #establish number of valid characters
  valid_length = nuc_a + nuc_c + nuc_g + nuc_t

  #if invalid characters are present, inform user, otherwise inform user that
  #all characters are valid
  if valid_length != string.size
    puts "String contains invalid characters"
  else
    puts "All valid characters"
  end
end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAVAAAAAAGAGTGTCTGATAGCAGC"
