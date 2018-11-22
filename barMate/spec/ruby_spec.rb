require ('rspec')
require ('pry')
require ('BitcoinRPC')


describe('BitcoinRPC') do 

  it('tests a method for BitcoinRPC') do

    dummy = BitcoinRPC.new()

    expect(dummy.method()).to(eq(expected result))

  end

end

