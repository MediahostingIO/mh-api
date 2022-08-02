import AnnouncementController from "./team/AnnouncementController";
import BetakeyController from "./team/BetakeyController";
import ProductsController from "./team/ProductsController";
import CategoryController from "./team/CategoryController";
import HostController from "./team/HostController";
import NotificationsController from "./team/NotificationController";
import PaymentController from "./team/PaymentController";
import StatisticsController from "./team/StatisticsController";
import SettingsController from "./team/SettingsController";
import TicketController from "./team/TicketController";
import CustomerController from "./team/CustomerController";
import UtilsController from "./team/UtilsController";
import MailTemplateController from "./team/MailTemplateController";
import NetworkController from "./team/NetworkController";

export default class TeamController {
	public announcements: AnnouncementController = new AnnouncementController();
	public betaKeys: BetakeyController = new BetakeyController();
	public categories: CategoryController = new CategoryController();
	public hosts: HostController = new HostController();
	public mailTemplates: MailTemplateController = new MailTemplateController();
	public network: NetworkController = new NetworkController();
	public notifications: NotificationsController = new NotificationsController();
	public payments: PaymentController = new PaymentController();
	public products: ProductsController = new ProductsController();
	public settings: SettingsController = new SettingsController();
	public statistics: StatisticsController = new StatisticsController();
	public tickets: TicketController = new TicketController();
	public user: CustomerController = new CustomerController();
	public utils: UtilsController = new UtilsController();
}
