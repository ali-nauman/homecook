import { Col, Row, Toast, ToastContainer } from 'react-bootstrap';

import { useToast } from '@hooks/useToast';
import { useMenu } from '@features/menu/useMenu';
import { useOrder } from '@features/order/useOrder';
import { MenuItem } from '@features/menu/types';
import { MenuItemCard } from '@features/menu/MenuItemCard';

export const Menu = () => {
  const day = new Date().getDay();
  const { menu } = useMenu(day);
  const { addToOrder } = useOrder();

  const { showToast, setShowToast } = useToast();

  const toggleToast = () => {
    setShowToast(s => !s);
  };

  const handleAddItem = (item: MenuItem, servingSize: number) => {
    addToOrder(item, servingSize);
    setShowToast(true);
  };

  const currentMenu = menu.map(item => (
    <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={3}>
      <MenuItemCard key={item.id} item={item} onClick={handleAddItem} />
    </Col>
  ));

  return (
    <>
      <div className="mx-4">
        <h3 className="pt-4">HomeCook</h3>
        <p>
          Take a look at the variety of fresh, home-made food that we can
          deliver at your doorstep!
        </p>

        <Row className="d-flex justify-content-between">{currentMenu}</Row>
      </div>

      <ToastContainer className="p-3" position="bottom-end">
        <Toast
          style={{ backgroundColor: '#333' }}
          show={showToast}
          onClose={toggleToast}
        >
          <Toast.Header>
            <strong className="me-auto">HomeCook</strong>
          </Toast.Header>
          <Toast.Body>Your order has been updated!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
