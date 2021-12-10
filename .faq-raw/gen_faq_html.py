import yaml
import markdown

with open("questions.yaml", "r") as stream:
    questions = yaml.safe_load(stream)

html = ''


def add_html(s):
    global html
    html += s


counter = 1
for question in questions:
    add_html('<div class="faq-group">')
    head = question['head']
    add_html(f'<h3>{head}</h3>')
    add_html('<div class="all-questions">')
    for group in question['groups']:
        if type(group) is not dict:
            print(f'type of {group} is not dict')
            exit(0)
        if 'q' not in group:
            print(f'{group} is missing key q')
            exit(0)
        if 'a' not in group:
            print(f'{group} is missing key a')
            exit(0)
        q = group['q']
        a = markdown.markdown(group['a'])
        add_html(f'''
        <div class="question-answer-group">
            <input id="qn-{counter}" type="checkbox" />
            <label for="qn-{counter}" class="question">
                <div class="icon"></div>
                <span>{q}</span>
            </label>
            <div class="answer">
                {a} 
            </div>
        </div>
        ''')
        counter += 1
    add_html('</div>')
    add_html('</div>')

f = open('output.html', 'w')
f.write(''.join(map(lambda x: x.strip(), html.split('\n'))))
f.close()
