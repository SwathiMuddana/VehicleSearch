package pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestBase {
    public static WebDriver driver = null;
    public Properties prop = getProperties();
    final static Logger logger = Logger.getLogger(TestBase.class);

    public Properties getProperties() {
        try {
            Properties prop = new Properties();
            FileInputStream ip = new FileInputStream("src/test/resources/properties/vehicleFinder.properties");
            prop.load(ip);
            logger.info("Property file read successful");
            return prop;
        } catch (FileNotFoundException ex) {
            logger.error("file not found" + ex);
        } catch (IOException ex) {
            logger.error("io exception" + ex);
        }
        return null;
    }
    public static WebDriver getDriver() {
        if (driver == null) {
            System.setProperty("webdriver.chrome.driver", "src/main/resources/driver/chromedriver");
            driver = new ChromeDriver();
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }
        return driver;
    }
    public WebElement getWebElementVisible(By by) {
        WebDriverWait wait = new WebDriverWait(driver, 100);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }
}
