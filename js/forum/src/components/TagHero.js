import Component from 'flarum/Component';

export default class TagHero extends Component {
  view() {
    const tag = this.props.tag;
    const color = tag.color();
    app.setTitle(tag.name());
    let description = tag.description();
    if (!description) {
      description = app.translator.trans('flarum-tags.forum.meta_description.discussions_tagged_text', { tag: tag.name() });
      if (description.constructor === Array) {
        description = description.join('');
      }
    }
    app.setDescription(description);

    return (
      <header className={'Hero TagHero' + (color ? ' TagHero--colored' : '')}
        style={color ? {color: '#fff', backgroundColor: color} : ''}>
        <div className="container">
          <div className="containerNarrow">
            <h2 className="Hero-title">{tag.name()}</h2>
            <div className="Hero-subtitle">{tag.description()}</div>
          </div>
        </div>
      </header>
    );
  }
}
