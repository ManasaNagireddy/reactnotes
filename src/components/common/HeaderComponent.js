import { Row, Col, Card,Layout } from 'antd';
import MenuComponent from './MenuComponent';
const { Header } = Layout;


const HeaderComponent = ({logo}) => {
	
	return (
		<>
			 <Header className="app-header">
				<Row justify="space-between" align="middle" style={{ height: '100%' }}>
					<Col>
						<img className="logo" src={logo} alt="Manasa-Logo"  />
					</Col>
					<Col>
						<MenuComponent />
					</Col>
				</Row>
			</Header>
		</>
	);
};

export default HeaderComponent;