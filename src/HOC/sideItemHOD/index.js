import "./style.css";

const SideItem = ({ item, children, nameClass }) => {
  return (
    <section>
      <div className="avatar">
        <img src={item.avatar} className="img" alt="图片" />
      </div>
      <div className={`info`}>
        <h3 className={`nickname`}>
          <span className={`${nameClass}`}>{item.name}</span>
        </h3>
        {children && children}
      </div>
    </section>
  );
};

const SideListHOC = SideItems => (props) => {
  return (
    <SideItems  {...props} />
  )
};


export default SideListHOC(SideItem);
