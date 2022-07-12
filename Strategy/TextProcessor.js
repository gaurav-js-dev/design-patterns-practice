let OutputFormat = Object.freeze({
    markdown: 0,
    html: 1
});

class ListStrategy {
    start(buffer) { }
    end(buffer) { }
    addListItem(buffer, item) { }
}

class MarkdownListStrategy extends ListStrategy {
    addListItem(buffer, item) {
        buffer.push(` * ${item}`);
    }
}

class HtmlListStrategy extends ListStrategy {
    start(buffer) {
        buffer.push('<ul>');
    }

    end(buffer) {
        buffer.push('</ul>');
    }

    addListItem(buffer, item) {
        buffer.push(`  <li>${item}</li>`)
    }
}


setOutputFormat(format)
{
    switch (format) {
        case OutputFormat.markdown:
            this.listStrategy = new MarkdownListStrategy();
            break;
        case OutputFormat.html:
            this.listStrategy = new HtmlListStrategy();
            break;
    }
}