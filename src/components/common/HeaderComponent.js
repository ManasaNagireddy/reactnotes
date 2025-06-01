import { Row, Col, Card,Layout } from 'antd';
import MenuComponent from './MenuComponent';
import logoImage from '../../assets/logo/logo.png'
const { Header } = Layout;


const HeaderComponent = ({logo}) => {

	return (
		<>
		{console.log(logoImage)}
			 <Header className="app-header">
				<Row justify="space-between" align="middle" style={{ height: '100%' }}>
					<Col>
					
						<img className="logo" src={logoImage} alt="Manasa-Logo"  />
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