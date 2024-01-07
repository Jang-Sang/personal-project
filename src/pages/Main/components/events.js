const EventList = () => {
  return (
    <Container>
      <S.UsedTrade>
        <S.Title>중고거래</S.Title>
        <Grid
          container
          spacing={{ xs: 1, md: 2, lg: 3 }}
          style={{ paddingBottom: 20 }}
        >
          {UsedProductList.slice(0, 4).map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              lg={3}
              style={{ paddingBottom: 40 }}
            >
              <OneProduct
                title={item.title}
                img={item.img_url}
                price={item.price}
                liked={item.liked}
                id={item.idx}
                status={item.status}
                createdAt={item.createdAt}
              />
            </Grid>
          ))}
        </Grid>
        <MMMButton
          onClick={() => onClickMoreBtn('0')}
          variant={'More'}
          style={{ border: '1px solid #9F9EB3' }}
        >
          MORE
        </MMMButton>
      </S.UsedTrade>
    </Container>
  );
};

export default EventList;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  padding: 30px 0;
  left: 0;
`;

const UsedTrade = styled.div`
  margin-bottom: 50px;
`;

const S = {
  UsedTrade,
  Title,
};
