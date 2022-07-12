let OutputFormat = Object.freeze({
    markdown: 0,
    html: 1
});

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