SOURCES		 := $(wildcard jsx/*.jsx)
OBJECTS    := $(SOURCES:jsx/%.jsx=js/%.js)

all: $(OBJECTS)

js/%.js: jsx/%.jsx
	@mkdir -p js
	babeljs --plugins transform-react-jsx $< --out-file $@

clean:
	rm -rf js
