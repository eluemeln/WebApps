male(paul).
male(kevin).
male(doug).

female(alice).
female(eva).
female(lea).


size(paul, tall).
size(kevin,notverytall).
size(alice,notverytall).
size(eva,notverytall).
size(lea, small).
size(doug, small).


colour(paul,brown).
colour(doug,brown).
colour(lea,brown).
colour(kevin,fair).
colour(alice,fair).
colour(eva,fair).



age(paul,ageripe).
age(doug,ageripe).
age(lea,ageripe).
age(alice, averageage).
age(kevin, young).
age(eva, young).

music(paul,classical).
music(lea,classical).
music(kevin,rocknroll).
music(eva,rocknroll).
music(alice, classical).
music(alice, rocknroll).
music(alice, jazz).
music(doug, jazz).

book(paul, adventure).
book(lea, adventure).
book(alice, adventure).
book(kevin, sciencebooks).
book(eva, sciencebooks).
book(doug, detectivenovels).

sport(paul, swimming).
sport(alice, swimming).
sport(lea,swimming).
sport(kevin,tennis).
sport(doug,tennis).
sport(eva, swimming).
sport(eva, tennis).

seeks(paul,X) :- size(X,tall), age(X,young). /*hair(X,red)*/
seeks(kevin,X) :- colour(X,fair), age(X,young), size(X,notverytall).
seeks(doug,X) :- size(X,small), colour(X,fair), age(X,averageage).
seeks(alice,X) :- size(X,tall), colour(X,brown), age(X,averageage).
seeks(eva,X) :- size(X,notverytall),  colour(X,brown), age(X,young).
seeks(lea,X) :- size(X,notverytall),  colour(X,brown), age(X,ageripe).

sameTaste(paul,X) :- music(X,classical), book(X, adventure), sport(X, swimming).
sameTaste(kevin,X) :- music(X,rocknroll), book(X, sciencebooks), sport(X, tennis).
sameTaste(doug,X) :- music(X,jazz), book(X, detectivenovels), sport(X, tennis).
sameTaste(alice,X) :- music(X,classical), book(X, adventure), sport(X, swimming)
					; music(X,rocknroll), book(X, adventure), sport(X, swimming)
					; music(X,jazz), book(X, adventure), sport(X, swimming).
					
sameTaste(eva,X) :- music(X,rocknroll), book(X, sciencebooks), sport(X, tennis)
					;music(X,rocknroll), book(X, sciencebooks), sport(X, swimming).
sameTaste(lea,X) :- music(X,classical), book(X, adventure), sport(X, swimming).
			
differentSex(X,Y) :-  
			male(X), female(Y)
			; male(Y) , female(X).
appropriatePhysically(X,Y) :- seeks(X,Y), differentSex(X,Y), sameTaste(Y,X).	
appropriate(X,Y) :- appropriatePhysically(X,Y). /*sameTaste(X,Y).*/


match(X,Y) :- appropriate(X,Y)
			;appropriate(Y,X).

