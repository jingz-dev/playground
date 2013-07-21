"""
http://www.cs.nthu.edu.tw/~wkhon/ds/ds10/tutorial/tutorial2.pdf
"""

def postfix_eval(expr):
	print expr
	digits = "0123456789"
	vals = []
	for i in expr:
		if i in digits:
			vals.append(int(i))
		else:
			if i == '+':
				vals.append(vals.pop() + vals.pop())
			if i == '-':
				vals.append(- vals.pop() + vals.pop())
			if i == '*':
				vals.append(vals.pop() * vals.pop())
			if i == '/':
				vals.append(1 / (vals.pop() / vals.pop()))
	return vals.pop()

def parse_postfix_simple(txt):
	"""
	only works with +/- or *// -- does not work with mixed opder operands
	"""
	digits = "0123456789"
	ops = []
	expr = []
	for i in txt:
		if i in digits:
			expr.append(i)
		else:
			if(len(ops) > 0):
				expr.append(ops.pop())
			ops.append(i)
	while len(ops) > 0:
		expr.append(ops.pop())
	return expr

def parse_postfix_simple_extended(txt):
	digits = "0123456789"
	ops = []
	expr = []
	for i in txt:
		if i in digits:
			expr.append(i)
		else:
			if len(ops) > 0 :
				if i in "*/":
					while ops[-1] not in "+-":
						expr.append(ops.pop())
				else:
					while len(ops) > 0:
						expr.append(ops.pop())				
			ops.append(i)
	while len(ops) > 0:
		expr.append(ops.pop())
	return expr

def parse_postfix_brackets(txt):
	digits = "0123456789"
	ops = []
	expr = []
	for i in txt:
		if i in digits:
			expr.append(i)
		else:
			if i == '(':
				ops.append(i)
			elif i == ')':
				while ops[-1] != '(':
					expr.append(ops.pop())
				ops.pop()
			elif i in "*/":
				while len(ops) > 0 and ops[-1] not in "+-" and ops[-1] != '(':
					expr.append(ops.pop())
				ops.append(i)
			elif i in "+-":
				while len(ops) > 0 and ops[-1] and ops[-1] != '(':
					expr.append(ops.pop())
				ops.append(i)
	while len(ops) > 0:
		expr.append(ops.pop())
	return expr


def test():
	print postfix_eval(parse_postfix_simple("1+2+3+4-9"));
	print postfix_eval(parse_postfix_simple_extended("1+3*3-3/3-9"));
	print postfix_eval(parse_postfix_brackets("(1+2)*(3+4)"))
	print postfix_eval("23+3*")

test()