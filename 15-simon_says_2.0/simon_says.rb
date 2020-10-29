def num_gen(a, b)
  rand(a..b)
end

def simon
  seq =[]
  correct = true

  until correct == false
    num = num_gen(1, 4)
    seq << num

    puts "The sequence is:"
    puts seq.join(' ')
    sleep 1
    puts `clear`

    puts 'Your Guess'
    ans = gets.chomp
    sleep 1
    puts `clear`

    if ans != seq.join(' ')
      correct = false
      puts "ruh roh, you loose. You got #{seq.size}"
    end
  end
end

simon()
