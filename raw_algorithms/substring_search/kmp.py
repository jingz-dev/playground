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
		# naive construction of dfa
		# refine needed
		if state > 0:
			for t in [x for x in transition if x != c]:
				mismatch = pat[1:state] + t
				n = dfa[mismatch[0]][0]
				for m in mismatch[1:]:
					n = dfa[m][n]
				dfa[t][state] = n
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

string = "how much wood would a woodchuck chuck if a woodchuck could chuck wood"
pattern = "would"

print match(string, pattern)