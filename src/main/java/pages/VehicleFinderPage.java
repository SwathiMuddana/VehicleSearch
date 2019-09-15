package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * This class is the page class for Vehicle finder page
 */
public class VehicleFinderPage extends TestBase {

    public WebElement txtbx_RegNo() {
        return getWebElementVisible(By.id("vehicleReg"));
    }

    public WebElement btn_FindVehicle() {
        return getWebElementVisible(By.name("btnfind"));
    }

    public WebElement txt_RegNo() {
        return getWebElementVisible(By.className("result"));
    }

}
