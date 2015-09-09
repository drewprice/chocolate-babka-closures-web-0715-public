describe('Chocolate Babka Count', function() {

  describe('basic counter closure accepting a starting number', function() {

    var bakeryCount = Count(0);

    it('should increment the number', function() {
      expect(bakeryCount()).toEqual(1);
    });

    it('should keep track of the count', function() {
      expect(bakeryCount()).toEqual(2);
      expect(bakeryCount()).toEqual(3);
    });
  });

  describe('Has a seperate bakery counter and babka counter', function() {

    it('should increment only one counter', function() {
      var bakeryCount = Count(3),
      babkaCount = Count(5);

      expect(bakeryCount()).toEqual(4);
      expect(babkaCount()).toEqual(6);
    });
  });
});

describe('Line number announcer', function() {
  describe('Seperate Announcers for Babkas and Baked Goods', function() {
    var bakeryCount = Count(3),
        babkaCount = Count(5),
        bakeryAnnouncer = Announce('Baked Goods', bakeryCount)
        babkaAnnouncer = Announce('Babka', babkaCount);

    it('should announce who is now being served in both lines', function() {
      expect(bakeryAnnouncer()).toEqual('Now serving Baked Goods number 4!');
      expect(babkaAnnouncer()).toEqual('Now serving Babka number 6!');
    });
  });
});
