from markdown import markdown


def build_markdown(filename, full_dir=False):
    if full_dir:
        path = filename
    else:
        path = f'/workdir/index_app/static/markdown/{filename}'
    with open(path, 'r', encoding='utf-8') as file:
        markdown_dom = markdown(file.read(), extensions=['markdown.extensions.tables',
            'markdown.extensions.attr_list',
            'markdown.extensions.def_list',
            'markdown.extensions.fenced_code',
            'markdown.extensions.sane_lists'])
        return markdown_dom
