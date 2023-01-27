   let expect= chai.expect;
    describe("allcards", function(){
        it("should combine suits and values", function(){
            let x = allCards(suits, values);
            expect(x).to.equal(suits + values);
}
    );

      it("should throw an error  not correct answer", function(){
            expect(function(){
                combineCards(suit);
            }).to.throw(Error);
        });
    });


