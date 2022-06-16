import ListItem from "./ListItem";

const List = (props: { gpus: any }) => {
  function renderItems() {
    const items = props.gpus;

    if (items.length === 0) {
      return <p className="empty-list-desc">Add some GPUs to compare...</p>;
    }

    return items.map((item: any) => {
      return <ListItem model={item.model} brand={item.brand} key={item.id} />;
    });
  }

  return (
    <>
      <div className="section-group">
        <p className="section-title">Added GPUs</p>
        <ol className="list-group">{renderItems()}</ol>
      </div>
    </>
  );
};

export default List;
