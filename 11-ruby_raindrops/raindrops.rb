#get a number
print "Please enter a number "
inp = gets.to_i

#find out if 3 is a factor, establish output variable
output = ""
noDrops = true
if inp % 3 == 0
  noDrops = false
  output += "Pling"
end
#find out if 5 is a factor, add to output variable if true
if inp % 5 == 0
  noDrops = false
  output += "Plang"
end
#find out if 7 is a factor, add to output variable if true
if  inp % 7 == 0
  noDrops = false
  output += "Plong"
end
#else output = string
if noDrops
  output = inp.to_s
end

#put output, with fancy-ing up
if noDrops
  puts "#{output} has no raindrops :("
else
  puts "Raindrops! #{output}"
end
