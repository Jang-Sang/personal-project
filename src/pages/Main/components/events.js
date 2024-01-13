import { useQuery } from 'react-query';
import AuthApi from 'apis/auth';
import { PRODUCT_QUERY_KEY } from 'consts';

const EventList = () => {
  const { data: eventList } = useQuery([PRODUCT_QUERY_KEY.EVENT_LIST], () =>
    AuthApi.getEventList(),
  );
  console.log(eventList);

  return (
    <div>
      <h1>Event List</h1>
      {eventList ? (
        <ul>
          {eventList.map((event, index) => (
            <li key={index}>
              {/* 이벤트 데이터의 구조에 따라 내용을 조정하세요. */}
              <h2>Title: {event.Title}</h2>
              <p>Thumnail: {event.Thumbnail}</p>
              <p>StartDate: {event.StartDate}</p>
              <p>EndDate: {event.EndDate}</p>
              {/* 추가적인 이벤트 정보를 여기에 표시할 수 있습니다. */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};
export default EventList;
