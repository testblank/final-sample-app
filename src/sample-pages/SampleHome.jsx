import { HeaderLayout, usePageLayout } from 'layout';
// import { Popup } from 'modal/Popup';
// import { useDispatch } from 'react-redux';
// import { goToJoin } from 'redux/actions/routeActions';

const SampleHome = ({ history, location, match, staticContext }) => {
  // const dispatch = useDispatch();
  const { renderPage } = usePageLayout();

  const cbOnClick = () => {
    // const props = {
    //   titleStr: 'test',
    //   messageStr: 'test message',
    //   firstBtnStr: 'firest',
    //   secondBtnStr: ' second',
    //   btnQuantity: 2,
    //   onClick: () => console.log('onClick'),
    //   onClickCancel: () => console.log('onClickCancel'),
    // };
    // dispatch(goToJoin(props));
  };

  const headerRender = () => {
    return (
      <HeaderLayout
        type={'modal'}
        // left={<div>img</div>}
        title={'SAMPLE HOME'}
        // right={'right'}
        // cbOnClickLeft={() => console.log('onClickLeft')}
        // cbOnClickRight={() => console.log('onClickRight')}
      />
    );
  };

  const bodyRender = () => {
    return (
      <>
        <div style={{ color: ' red' }} onClick={() => cbOnClick()}>
          /join 으로 이동
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vel
          placeat ea consequuntur tempore praesentium laudantium at accusantium
          qui? Quidem nulla eius quam optio deleniti voluptatem dolorum alias ea
          a?
        </div>
      </>
    );
  };

  const render = renderPage({
    header: headerRender(),
    body: bodyRender(),
  });

  return render;
};

export default SampleHome;
