
package stepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pages.TestBase;
import pages.VehicleFinderPage;

/**
 * This class contains the step definitions for vehicleFinder feature
 */
public class VehicleFinderStepDefinition extends TestBase {

    private VehicleFinderPage vehicleFinderPage = new VehicleFinderPage();

    @Given("^I am on vehicle search page$")
    public void iNavigateToHomepage() throws Throwable {
        getDriver().get(prop.getProperty("url"));

    }

    @When("^I enter vehicle registration number (.+)$")
    public void iEnterVehicleRegistrationNumberRegistrationNumber(String registrationNumber) throws Throwable {
        vehicleFinderPage.txtbx_RegNo().sendKeys(registrationNumber);
    }

    @And("^I search for vehicle$")
    public void iSearchForVehicle() throws Throwable {
        vehicleFinderPage.btn_FindVehicle().click();
    }

    @Then("^I should be able to view the result as (.+)$")
    public void iShouldBeAbleToViewTheVehicleRegistrationNumber(String result) throws Throwable {
        Assert.assertTrue(vehicleFinderPage.txt_RegNo().getText().contains(result));
    }

    @After
    public void TearDown(Scenario scenario) {
        byte[] screenShot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenShot, "image/png");
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }
}