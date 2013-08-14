def pattern_to_dfa(pat):
	transition = set(pat)
	# all points to the same list
	# dfa = dict.fromkeys(transition, [0 for i in range(len(pat))])
	
	# this works (dict comprehension)
	# dfa = {k : [0] * len(pat) for k in transition}
	# this works too
	dfa = dict((k, [0] * len(pat)) for k in transition)
	
	for state in range(len(pat)):
		c = pat[state]
		dfa[c][state] = state + 1
	x = 0
	for state in range(1, len(pat)):
		c = pat[state]
		for t in [y for y in transition if y != c]:
			dfa[t][state] = dfa[t][x]
		x = dfa[c][x]
	return dfa

def match(string, pattern):
	dfa = pattern_to_dfa(pattern)
	state = 0
	for i in range(len(string)):
		s = string[i]
		if s in dfa.keys():
			state = dfa[s][state]
			if state == len(pattern):
				return i - len(pattern) + 1
		else:
			state = 0
	return -1

string = "abababaabbacbababac"
pattern = "ababac"

print match(string, pattern)